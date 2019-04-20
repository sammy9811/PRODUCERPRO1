const postsDiv = document.getElementById('posts');
const postRef = firebase.database().ref('posts');

postRef.on('child_added', function(snapshot) {
	createPost(snapshot.val());
});

function el(tag, clas) {
	const element = document.createElement(tag);
	element.classList.add(clas);
	return element;
}

function createPost(post) {
	const postDiv = el('div', 'post');
	const postText = el('div', 'post-text');
	postText.textContent = post.text;
	postDiv.appendChild(postText);
	
	const postInfo = el('div', 'post-info');
	
	const author = el('span', 'author');
	author.textContent = post.displayName;
	
	const date = el('span', 'date');
	date.textContent = post.date.split(' ').slice(0, 4).join(' ');
	
	postInfo.innerHTML += "by ";
	postInfo.appendChild(author);
	postInfo.innerHTML += " on ";
	postInfo.appendChild(date);
	
	postDiv.appendChild(postInfo);
	postsDiv.insertBefore(postDiv, postsDiv.firstElementChild);
//	postsDiv.appendChild(postDiv);
}

