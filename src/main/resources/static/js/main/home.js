let $container = $('#home-root');

function logoImage(){
    let html = `
        <div class="row h-25 position-relative">
            <div class="col-12 h-100">
                <img src="https://www.iephb.ru/wp-content/uploads/2021/01/img-placeholder.png" class="img-fluid rounded-4 w-100 h-100" alt="image" style="object-fit: cover">
            </div>
            <div class="col-12 position-absolute bottom-0" style="transform: translate(0,25px)">
                <div class="row d-flex">
                    <div class="col-1 p-2 bg-white rounded-4 shadow d-flex ms-auto">
                        <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                    </div>
                    <div class="col-1 p-2 bg-white rounded-4 shadow d-flex ms-2">
                        <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                    </div>
                    <div class="col-1 p-2 bg-white rounded-4 shadow d-flex ms-2">
                        <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                    </div>
                    <div class="col-1 p-2 bg-white rounded-4 shadow d-flex ms-2 me-5">
                        <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    return html;
}

$container.append(logoImage());