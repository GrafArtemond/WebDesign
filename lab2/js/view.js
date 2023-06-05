let formSelector = $('#post-form');
let newPost = $('<div class="card">');
let postList =  $('#post-list');
function removePost(){
	$(this).closest('.card').remove();
}	
function addComment(){
	commentText = $(this).siblings('.comment-input').val();
	if (commentText !== '') {
		comment = $('<div class="comment">').text(commentText);
		$(this).closest('.card-body').append(comment);
		$(this).siblings('.comment-input').val('');
	}
}
function addPost(){
	newPost.append($('<div class="card-body">')
	.append($('<h5 class="card-title">').text(postTitle))
	.append($('<p class="card-text">').text(postContent))
	.append($('<button class="btn btn-sm btn-danger float-right">').text('Видалити').click(function() {
	$(this).closest('.card').remove();
	}))
	)
	.append($('<div class="comments-block" >')
	.append($('<textarea class="form-control comment-input" rows="2" placeholder="Введіть коментар...">'))
	.append($('<button class="btn btn-primary btn-sm add-comment-btn">').text('Додати коментар'))); // Закриваючі теги додані тут

	postList.append(newPost);
	$('#post-title').val('');
	$('#post-content').val('');
}