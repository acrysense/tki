document.addEventListener("DOMContentLoaded", function () {
    // ACCORDIONS
    const devicesName = document.querySelectorAll('.devices__name')
    
    if (devicesName) {
        devicesName.forEach((item) =>
            item.addEventListener('click', () => {
                const parent = item.parentNode.parentNode.parentNode.parentNode
                const content = document.querySelector('.devices__content')

                if (parent.classList.contains('devices__item--active')) {
                    parent.classList.remove('devices__item--active')
                } else {
                    document.querySelectorAll('.devices__item').forEach((child) => {
                        child.classList.remove('devices__item--active')
                    })
                    parent.classList.add('devices__item--active')
                }
            })
        )
    }

    const circleCheckbox = document.querySelectorAll('.circle-checkbox')

    if (circleCheckbox) {
        circleCheckbox.forEach((item) =>
            item.addEventListener('click', () => {
                document.querySelectorAll('.package__item').forEach((child) => {
                    child.classList.remove('package__item--active')
                })

                const parent = item.parentNode.parentNode
                parent.classList.add('package__item--active')
            })
        )
    }

    // SELECT
    const devicesSelect = document.querySelectorAll('.devices__select')

    if (devicesSelect) {
        devicesSelect.forEach((item) => {
            item.addEventListener('change', () => {
                item.classList.add('devices__select--active')
            })
        })
    }

    // CHECKBOX DISABLED
    const licensesCheckbox = document.getElementById('licenses-checkbox')
    const licensesWrapper = document.getElementById('licenses-wrapper')

    if (licensesCheckbox) {
        licensesCheckbox.addEventListener('change', () => {
            if (licensesCheckbox.checked) {
                licensesWrapper.classList.remove('devices__wrap--disabled')
                licensesWrapper.querySelectorAll('.devices__input').forEach((item) =>
                    item.removeAttribute('disabled')
                )
            } else {
                licensesWrapper.classList.add('devices__wrap--disabled')
                licensesWrapper.querySelectorAll('.devices__input').forEach((item) =>
                    item.setAttribute('disabled', 'disabled')
                )
            }
        })
    }
});