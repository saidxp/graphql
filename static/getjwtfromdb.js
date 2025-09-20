export async function GetJwt() {

    try {
        const res = await fetch('/takejwt', {method: "GET",
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        if (res.ok) {

        }
        return res
    } catch {
        console.log("there is aproblem her at this")
    }
}