import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")){

            const [,employeeId] = itemClicked.id.split("--")

          
            for (const employee of employees) {
                if (parseInt(employeeId) === employee.id){
                    const numOfProduct = filterNumOfProductSoldByEmployee (employee)
                    window.alert(`${employee.name} sold ${numOfProduct} products`)

                }
            }
            
        }
    }
)


const filterNumOfProductSoldByEmployee = (employee) => {
    let numOfProduct = 0
    for (const orderInfo of orders) {
        if (orderInfo.employeeId === employee.id) {
            numOfProduct++
        }
    }
    return numOfProduct
}










