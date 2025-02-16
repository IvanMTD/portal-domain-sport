let $root = $('#calendar-root');
let dates = getCurrentYear();

function calendar(){
    return `
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4" id="calendar-container"></div>
        </div>
    `;
}

function day(date){
    return `
        <div class="col-12 col-md-6 col-lg-3 flip-card m-0 p-0" style="height: 300px">
            <div class="flip-card-inner position-relative w-100 h-100">
                <div class="flip-card-front position-absolute d-flex flex-column ${date.current ? 'border border-2 border-danger' : ''}">
                    <p class="mx-auto mt-auto display-1 ${date.dayString === 'суббота' ? 'text-danger' : ''} ${date.dayString === 'воскресенье' ? 'text-danger' : ''}"><b>${date.day}</b></p>
                    <p class="mx-auto mb-auto fs-4">${date.dayString}</p>
                </div>
                <div class="flip-card-back position-absolute ${date.current ? 'border border-2 border-danger' : ''}">
                    <div class="row h-100 position-relative">
                        <div class="col-12 w-100 h-100">
                            <img class="img-fluid object-fit-cover w-100 h-100" src="/img/tennis-tiger.jpeg" alt="image">
                        </div>
                        <div class="col-12 d-flex position-absolute bottom-0">
                            <p class="mx-auto mb-auto fs-5 text-white"><b>${date.day}.${date.month}.${date.year}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function alterCalendar(){
    return `
        <div class="container-fluid h-25">
            <div class="row d-flex flex-nowrap overflow-hidden pb-5" id="alter-calendar" style="height: 300px"></div>
        </div>
        <div class="container h-75">
            <div class="row p-2 h-100" id="alter-calendar-body"></div>
        </div>
    `
}

function alterDay(date){
    return `
        <div class="h-100 p-2 zoom-in" style="width: 300px" id="${date.uuid}" onclick="showData(this.id)">
            <div class="d-flex flex-column ${date.current ? 'border border-2 border-danger' : 'shadow'} rounded-4 h-100">
                <p class="display-2 mx-auto mt-auto ${date.dayString === 'суббота' ? 'text-danger' : ''} ${date.dayString === 'воскресенье' ? 'text-danger' : ''}""><b>${date.day}</b></p>
                <p class="mx-auto fs-4"><b>${date.dayString}</b></p>
                <p class="mx-auto mb-auto fs-4 text-secondary">${date.stringMonth} ${date.year}</p>
            </div>
        </div>
    `;
}

function showData(uuid){
    let date = dates.find(date => date.uuid === uuid);
    let $body = $('#alter-calendar-body');
    $body.empty();
    $body.append(alterCalendarEvent(date));
}

function alterCalendarEvent(date) {
    return `
        <div class="col-12 w-100 h-100 d-flex rounded-4 shadow">
            <p class="m-auto fs-1"><i class="fs-1 bi bi-calendar-date"></i> ${date.day} ${date.stringMonth} ${date.year}</p>
        </div>
    `
}

function getCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dates = [];
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayString = date.toLocaleDateString('ru-RU', { weekday: 'long' });
        const stringMonth = date.toLocaleDateString('ru-RU', { month: 'long' });

        dates.push({
            day: day,
            dayString: dayString,
            month: month + 1, // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
            stringMonth: stringMonth,
            year: year,
            current: today.getDate() === day
        });
    }

    return dates;
}

function getCurrentYear() {
    const today = new Date();
    const year = today.getFullYear();
    const dates = [];

    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayString = date.toLocaleDateString('ru-RU', { weekday: 'long' });
            const stringMonth = date.toLocaleDateString('ru-RU', { month: 'long' });
            let uuid = generateUUID();

            dates.push({
                uuid : uuid,
                day: day,
                dayString: dayString,
                month: month + 1, // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
                stringMonth: stringMonth,
                year: year,
                current: today.getDate() === day && today.getMonth() === month
            });
        }
    }

    return dates;
}

function drawPage(num){
    if(num === 1){
        $root.append(calendar());
        let $container = $('#calendar-container');
        getCurrentMonth().forEach((date) => {
            $container.append(day(date));
        });
    }else{
        $root.append(alterCalendar());
        let $container = $('#alter-calendar');
        let $body = $('#alter-calendar-body');
        let html = '';
        let currentDate;
        dates.forEach((date) => {
            html += alterDay(date);
            if(date.current){
                currentDate = date;
            }
        });
        $container.append(html);

        // Добавляем обработчики для drag-скролла
        let isDragging = false;
        let startX;
        let scrollLeft;

        function handleMouseDown(e) {
            isDragging = true;
            const rect = $container[0].getBoundingClientRect();
            startX = (e.pageX || e.touches[0].pageX) - rect.left;
            scrollLeft = $container.scrollLeft();

            // Для мобильных устройств
            $container.addClass('grabbing');
        }

        function handleMouseMove(e) {
            if (!isDragging) return;
            e.preventDefault();

            const rect = $container[0].getBoundingClientRect();
            const x = (e.pageX || e.touches[0].pageX) - rect.left;
            const walk = (x - startX) * 2; // Чувствительность прокрутки
            $container.scrollLeft(scrollLeft - walk);
        }

        function handleMouseUp() {
            isDragging = false;
            $container.removeClass('grabbing');
        }

        // Десктопные события
        $container.on('mousedown', handleMouseDown);
        $container.on('mousemove', handleMouseMove);
        $container.on('mouseup mouseleave', handleMouseUp);

        // Мобильные события
        $container.on('touchstart', handleMouseDown);
        $container.on('touchmove', handleMouseMove);
        $container.on('touchend', handleMouseUp);

        // Рассчитайте смещение для центрирования текущей даты
        let size = 300;
        let index = dates.findIndex(date => date.current);
        let containerHalfWidth = $container.width() / 2;
        let offset = (index * size) - (containerHalfWidth - (size / 2));

        // Примените смещение к контейнеру
        $container.scrollLeft(offset);
        $body.append(alterCalendarEvent(currentDate));
    }
}