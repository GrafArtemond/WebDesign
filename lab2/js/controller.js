 $(document).ready(function() {
      formSelector.submit(function(event) {
        event.preventDefault();
        postTitle = $('#post-title').val();
        postContent = $('#post-content').val();
        newPost = $('<div class="card">')
          .append($('<div class="card-body">')
            .append($('<h5 class="card-title">').text(postTitle))
            .append($('<p class="card-text">').text(postContent))
            .append($('<button class="btn btn-sm btn-danger float-right">').text('Видалити').click(function() {
              $(this).closest('.card').remove();
            }))
            .append($('<button class="btn btn-sm btn-primary float-right mr-2">').text('Коментарі').click(function() {
              let commentsBlock = $(this).siblings('.comments-block');
              let commentsBtn = $(this);
              if (commentsBlock.is(':visible')) {
                commentsBlock.slideUp(function() {
                  commentsBtn.text('Коментарі (0)');
                });
              } else {
                commentsBlock.slideDown(function() {
                  commentsBtn.text('Згорнути коментарі');
                });
              }
            }))
            .append($('<div class="comments-block" >')
              .append($('<textarea class="form-control comment-input" rows="2" placeholder="Введіть коментар...">'))
              .append($('<button class="btn btn-primary btn-sm add-comment-btn">').text('Додати коментар')))); // Закриваючі теги додані тут

        $('#post-list').append(newPost);
        $('#post-title').val('');
        $('#post-content').val('');
      });

      $('#post-list').on('click', '.btn-danger', function() {
        $(this).closest('.card').remove();
      });

      $('#post-list').on('click', '.add-comment-btn', function() {
        let commentText = $(this).siblings('.comment-input').val();
        if (commentText !== '') {
          let comment = $('<div class="comment">').text(commentText);
          $(this).closest('.card-body').append(comment);
          $(this).siblings('.comment-input').val('');
        }
      });
    });