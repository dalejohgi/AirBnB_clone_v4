#!/usr/bin/node
$( document ).ready(function () {
    const amenitiesDic = {};
    $("INPUT:checkbox").change(function () {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');
        if (this.checked) {
            amenitiesDic[amenityId] = amenityName;
        } else {
            delete amenitiesDic[amenityId];
        }
        if (Object.values(amenitiesDic).length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(Object.values(amenitiesDic).join(', '));
        } 
    });
    $.ajax({
        type: 'GET',
        crossDomain: true,
        url: 'http://127.0.0.1:5001/api/v1/status/',
        success: function (data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    });
});

