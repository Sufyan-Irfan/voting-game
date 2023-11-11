
    let myArray = []; // Empty array to store friends

    const friendInput = document.getElementById('friendInput');
    const addFriendBtn = document.getElementById('addFriendBtn');
    const outputArea = document.getElementById('outputArea');

    addFriendBtn.addEventListener('click', function () {
      addFriendToList();
    });

    function addFriendToList() {
      const newFriend = friendInput.value;
      if(newFriend != ""){
        myArray.push(newFriend);
      }else{
        
      }
      friendInput.value = '';
      buildPageContent();
    }

    function buildPageContent() {
    outputArea.innerHTML = '';
    
      myArray.forEach(function (friend, index) {
        const row = document.createElement('tr');

        const indexCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const votesCell = document.createElement('td');

        indexCell.textContent = index + 1;
        nameCell.textContent = friend;
        votesCell.textContent = 0;

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(votesCell);

        outputArea.appendChild(row);

        row.addEventListener('click', function () {
          increaseVoteCounter(row);
        });
      });
    }

    function increaseVoteCounter(row) {
      let currentVotes = parseInt(row.lastChild.textContent);
      currentVotes++;
      row.lastChild.textContent = currentVotes;
    }

    // Initial page build
    buildPageContent();
  