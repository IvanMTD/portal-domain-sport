let $root = $('#calendar-root');

function calendar(){
    return `
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4" id="calendar-container"></div>
        </div>
    `;
}

$root.append(calendar());

let $container = $('#calendar-container');

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

getCurrentMonth().forEach((date) => {
    $container.append(day(date));
});