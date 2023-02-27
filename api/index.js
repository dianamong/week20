const button = document.querySelector('.btn');

function getActivity() {
fetch("http://www.boredapi.com/api/activity?type=recreational")
  .then((response) => response.json())
  .then(activity => {
    document.querySelector('.activity').textContent = activity.activity;
  })
  .catch((err) => console.log(err));
}

button.addEventListener('click', getActivity);