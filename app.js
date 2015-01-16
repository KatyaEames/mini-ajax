$(document).ready(function() {
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
			url: 'http://reqr.res/api/users?page=1',
			success: function(res) {
				console.log(res);
			}
		});
	});


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
	$('#addUser').on('click', function() {
		var userName = $('#name').val();
		var userJob = $('#job').val();
		return $.ajax({
			method: 'POST',
			url: 'http://reqr.es/api/users',
			data: {name: userName, job: userJob}
			success: function(res) {
				$('#recentUser').html(
					'<li>' +
						'name: ' + res.name +
					'</li>' +
					'<li>' +
						'job: ' + res.job +
					'</li>' +
					'<li>' +
						'id: ' + res.id +
					'</li>' +
					'<li>' +
						'created at: ' + res.createdAt +
					'</li>'
				)
			}
		})
	});
});