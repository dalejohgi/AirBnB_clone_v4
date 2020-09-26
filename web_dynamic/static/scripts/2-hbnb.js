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
});
