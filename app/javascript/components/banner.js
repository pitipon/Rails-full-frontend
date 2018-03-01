import Typed from 'typed.js';
import swal from 'sweetalert';

function loadDynamicBannerText() {
    new Typed('#banner-typed-text', {
        strings: ["Order food", "in Thailand"],
        typeSpeed: 50,
        loop: true
    });
}

function bindSweetAlertButtonDemo() {
    document.getElementById('sweet-alert-demo').addEventListener('click', () => {
        swal({
            title: "A nice alert",
            text: "This is a great alert",
            icon: "success"
        })
    })
}

export {loadDynamicBannerText};
export {bindSweetAlertButtonDemo};