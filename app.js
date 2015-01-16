$(document).ready(function() {
	$('#getUsers').on('click', function() {
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.res/api/users?page=1',
			success: function(res) {
				console.log(res);
			}
		});
	});

	var insertData = function(arr) {
		for (var i = 0; i < arr.lrngth; i++) {
			$('#userInfo' + (i + 1)).html('div + 
				User Info:' +
				'<li>' +
				'First name:' +
				'</li>' +
				'<li>' +
				'Last name:' +
				'</li>' +
				'<hr>' +
				'</div>'
			)
		};
	};

	$('#getUsers').on('click', function() {
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			success: function(res) {
				console.log(res);
				insertData(res.data);
			}
		})
	}
	
});