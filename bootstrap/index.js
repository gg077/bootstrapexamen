// https://codepen.io/scottbram/pen/PoGpyKa

function initializeRangeSlider(sliderId, minValue = 30, maxValue = 60) {
    const slider = document.querySelector(`#${sliderId}`);
    const rangeSlider_min = minValue;
    const rangeSlider_max = maxValue;

    slider.querySelector('.range-slider-val-left').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;
    slider.querySelector('.range-slider-val-right').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;

    slider.querySelector('.range-slider-val-range').style.left = `${rangeSlider_min}%`;
    slider.querySelector('.range-slider-val-range').style.right = `${(100 - rangeSlider_max)}%`;

    slider.querySelector('.range-slider-handle-left').style.left = `${rangeSlider_min}%`;
    slider.querySelector('.range-slider-handle-right').style.left = `${rangeSlider_max}%`;

    slider.querySelector('.range-slider-tooltip-left').style.left = `${rangeSlider_min}%`;
    slider.querySelector('.range-slider-tooltip-right').style.left = `${rangeSlider_max}%`;

    slider.querySelector('.range-slider-tooltip-left .range-slider-tooltip-text').innerText = rangeSlider_min;
    slider.querySelector('.range-slider-tooltip-right .range-slider-tooltip-text').innerText = rangeSlider_max;

    const inputLeft = slider.querySelector('.range-slider-input-left');
    const inputRight = slider.querySelector('.range-slider-input-right');

    inputLeft.value = rangeSlider_min;
    inputRight.value = rangeSlider_max;

    inputLeft.addEventListener('input', (e) => {
        e.target.value = Math.min(e.target.value, inputRight.value - 1);
        const value = (100 / (parseInt(inputLeft.max) - parseInt(inputLeft.min))) * parseInt(e.target.value) -
            (100 / (parseInt(inputLeft.max) - parseInt(inputLeft.min))) * parseInt(inputLeft.min);

        slider.querySelector('.range-slider-val-left').style.width = `${value}%`;
        slider.querySelector('.range-slider-val-range').style.left = `${value}%`;
        slider.querySelector('.range-slider-handle-left').style.left = `${value}%`;
        slider.querySelector('.range-slider-tooltip-left').style.left = `${value}%`;

        slider.querySelector('.range-slider-tooltip-left .range-slider-tooltip-text').innerText = e.target.value;
    });

    inputRight.addEventListener('input', (e) => {
        e.target.value = Math.max(e.target.value, inputLeft.value - (-1));
        const value = (100 / (parseInt(inputRight.max) - parseInt(inputRight.min))) * parseInt(e.target.value) -
            (100 / (parseInt(inputRight.max) - parseInt(inputRight.min))) * parseInt(inputRight.min);

        slider.querySelector('.range-slider-val-right').style.width = `${100 - value}%`;
        slider.querySelector('.range-slider-val-range').style.right = `${100 - value}%`;
        slider.querySelector('.range-slider-handle-right').style.left = `${value}%`;
        slider.querySelector('.range-slider-tooltip-right').style.left = `${value}%`;

        slider.querySelector('.range-slider-tooltip-right .range-slider-tooltip-text').innerText = e.target.value;
    });
}

initializeRangeSlider('RangeSliderMain', 30, 60);
initializeRangeSlider('RangeSliderOffcanvas', 40, 70);
