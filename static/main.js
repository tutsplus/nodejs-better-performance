$(function () {
	$('button').on('click', function () {
		$.ajax({
			url: '/getpost',
			success: function (data) {
				$('button').after(data);
			}
		});
	});
});