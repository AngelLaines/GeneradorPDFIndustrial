document.addEventListener('DOMContentLoaded', function () {
    const numberForm = document.getElementById('numberForm');
    const result = document.getElementById('result');

    numberForm.addEventListener('input', function (event) {
        const number = event.target.value;
        if (number) {
            checkNumber(number);
        } else {
            result.innerHTML = '';
        }
    });

    function checkNumber(number) {
        // Send an AJAX request to your server to check if the number exists in the database.
        // You can use XMLHttpRequest, fetch, or a library like Axios.

        // Example using fetch:
        fetch(`/check-number.php?number=${number}`)
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    result.innerHTML = `Number ${number} is already registered.`;
                } else {
                    result.innerHTML = `Number ${number} is not registered.`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
/*
 Id de maestro: <input type="number" name="id profesor" id="id-prof">
            <div id="result"> resultado de tamales:
                <output name="x" for="id-prof"></output>
            </div>
            <button class="btn__pdf">Generar PDF</button>

*/