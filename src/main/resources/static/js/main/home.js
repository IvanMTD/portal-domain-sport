let $container = $('#home-root');
$container.append(`
    <div class="container h-25" id="present"></div>
    <div class="position-relative h-50">
        <div class="container-fluid m-0 p-0 h-100" id="bg-description"></div>
        <div class="w-100 h-100 position-absolute top-0">
            <div class="container h-100 px-4 py-5" id="description"></div>
        </div>
    </div>
`);
let $present = $('#present');
let $bgDescription = $('#bg-description')
let $description = $('#description');

function logoImage(){
    return `
        <div class="row h-100 position-relative pb-3">
            <div class="col-12 h-100">
                <img src="https://www.iephb.ru/wp-content/uploads/2021/01/img-placeholder.png" class="img-fluid object-fit-cover rounded-4 w-100 h-100" alt="image">
            </div>
            <div class="col-12 position-absolute bottom-0">
                <div class="row d-flex">
                    <div class="col">
                        <h1 class="display-3 ms-1 text-white"><b>Испытательный текст</b></h1>
                    </div>
                    <div class="col-1 d-none d-md-block p-2 bg-white rounded-4 shadow ms-auto">
                        <div class="d-flex w-100 h-100">
                            <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                        </div>
                    </div>
                    <div class="col-1 d-none d-md-block p-2 bg-white rounded-4 shadow ms-2">
                        <div class="d-flex w-100 h-100">
                            <p class="m-auto"><i class="bi bi-person fs-2"></i></p>
                        </div>
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
}

$present.append(logoImage());

function backgroundDescription(){
    return `
        <div class="row h-100 position-relative d-flex">
            <div class="bg-secondary-subtle h-25 my-auto border-bottom border-5 border-secondary-subtle"></div>
        </div>
    `;
}

$bgDescription.append(backgroundDescription());

function description(){
    return `
        <div class="row bg-white rounded-4 shadow h-100">
            <div class="col-12 d-flex h-100">
                <p class="fs-5 m-auto text-secondary">Description</p>
            </div>
        </div>
    `;
}

$description.append(description());