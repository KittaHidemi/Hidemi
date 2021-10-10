window.onload = () => {
  async function fetchData(requestURL, getQuery = '', postQuery = '') {
    const data = {
      method: postQuery != '' ? 'POST' : 'GET',
      headers: {'Content-Type': postQuery != '' ? 'application/x-www-form-urlencoded' : 'text/plain'},
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    };
    
    if(postQuery != '') data.body = postQuery;

    const response = await fetch(requestURL + (getQuery != '' ? '?' + getQuery : ''), data);
　　return response.json();
  }
  function showResult(data) {
    console.log(data);
    const text = document.getElementById('response');
    switch(data.result) {
      case 0:
        text.textContent = data.count;
        break;
      case 1:
        text.textContent = '存在しない品目です';
        break;
      case 2:
        text.textContent = 'パラメーターが正しくありません';
    }
  }
  
  
// GET呼び出し---------------------------------------------------
  document.getElementById('get').onclick = e => {
  e.preventDefault();
    fetchData('ajax.php', 'name=' + document.getElementById('flower').value).then(data => { showResult(data); }
    );
  };
// 呼び出し---------------------------------------------------
  document.getElementById('post').onclick = e => {
  e.preventDefault();
    fetchData('ajax.php', '', 'name=' + document.getElementById('flower').value).then(data => { showResult(data); }
    );
  };
};