import mongoose from "mongoose";
import  config  from "config";

async function connect() {
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri)
        console.log('conectado ao banco de dados')
    } catch (e) {
        console.log('não foi possivel conectar ao banco de dados')
        console.log(`Erro: ${e}`)
    }
}

export default connect