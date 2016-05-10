ymaps.ready(function() {
    var a = new ymaps.Map("ya-map", {
            center: [59.939346, 30.329383],
            zoom: 16,
            controls: []
        }, {
            suppressMapOpenBlock: !0
        }, {
            searchControlProvider: "yandex#search"
        }),
        b = new ymaps.Placemark([59.938669, 30.323057], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map_pin.png",
            iconImageSize: [218, 142],
            iconImageOffset: [-39, -139]
        });
    a.geoObjects.add(b),
        a.controls.remove("rulerControl"),
        a.controls.remove("searchControl"),
        a.controls.remove("trafficControl"),
        a.controls.remove("typeSelector"),
        a.controls.remove("zoomControl"),
        a.controls.remove("geolocationControl"),
        a.controls.remove("routeEditor")
});
var link = document.querySelector(".contacts-info-button"),
    popup = document.querySelector(".feedback-form"),
    overlay = document.querySelector(".feedback-form-overlay"),
    close = popup.querySelector(".feedback-form-close"),
    form = popup.querySelector("form"),
    username = popup.querySelector("[name=username]"),
    email = popup.querySelector("[name=email]"),
    comment = popup.querySelector("[name=comment]"),
    storage_user = localStorage.getItem("username"),
    storage_email = localStorage.getItem("email");
link.addEventListener("click", function(a) {
        a.preventDefault(),
            popup.classList.add("feedback-form-show"),
            overlay.classList.add("feedback-form-overlay-show"),
            storage_user && storage_email ? (username.value = storage_user, email.value = storage_email, comment.focus()) : username.focus()
    }),
    close.addEventListener("click", function(a) {
        a.preventDefault(),
            popup.classList.remove("feedback-form-show"),
            popup.classList.remove("feedback-form-error"),
            overlay.classList.remove("feedback-form-overlay-show")
    }),
    form.addEventListener("submit", function(a) {
        username.value && email.value && comment.value ? (localStorage.setItem("username", username.value),
            localStorage.setItem("email", email.value)) : (a.preventDefault(),
            popup.classList.remove("feedback-form-error"),
            popup.offsetWidth = popup.offsetWidth,
            popup.classList.add("feedback-form-error"))
    }), window.addEventListener("keydown", function(a) {
        27 === a.keyCode && popup.classList.contains("feedback-form-show") && (popup.classList.remove("feedback-form-show"), popup.classList.remove("feedback-form-error"), overlay.classList.remove("feedback-form-overlay-show"))
    }), overlay.addEventListener("click", function(a) {
        popup.classList.contains("feedback-form-show") && (popup.classList.remove("feedback-form-show"), popup.classList.remove("feedback-form-error"), overlay.classList.remove("feedback-form-overlay-show"))
    });