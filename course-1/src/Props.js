function Funcion(value) {

    return <>
    <p>{value.title}</p>
    <p>{value.body}</p>
    <p>{value.footer}</p>
    </>
}

export function Funcionv2({title, defaultValue = "default"}) {

    return <>
    <p>{title} {defaultValue}</p>
    </>
}

export function Funcionv3(data) {

    return <>
    <h5>{data.name}</h5>
    <h5>${data.value}</h5>
    <h5>{data.contacts}</h5>
    <h5>calle: {data.direccion.street} city: {data.direccion.city}</h5>
    <h5>is true ? {data.isTrue}</h5>
    <h5>is true ? {data.isTrue ? "true" : "false"}</h5>
    </>
}


export default Funcion