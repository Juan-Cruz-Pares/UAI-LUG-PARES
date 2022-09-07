const miPromise = new Promise((resolve, reject)=>{
    resolve('Resolvio la promesa')
    reject('Error')
})

const promiseResolver = async () => {
    try{
        const resultado = await miPromise
        console.log("Resultado: ", resultado)
    }catch(error) {
        console.log("Error: ", error)
    }
}

promiseResolver()