const inputTexst = document.querySelector('.inputTexst')
let array = []
function Meaning(number) {
    console.log(number)
    inputTexst.value += number
    array.push(number)



}

function delete_All() {
    inputTexst.value = ''
    array = []
}

function deleteOne() {

    array.pop()
    inputTexst.value = array.join('')
    console.log(array)


}
function operations() {
    if (inputTexst.value) {
        inputTexst.value = eval(inputTexst.value)
    }
    return;



}

