class UsuariosDAO {
    constructor(app) {
        this.dbUsuarios = app.infra.config.db.usuarios

        this.buscaTodos = this.buscaTodos.bind(this)
    }

    buscaTodos() {
        return new Promise((resolve, reject) => {
            this.dbUsuarios.find({}, (err, data) => {
                if(err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }

    buscaUm(loginUsuario) {
        return new Promise((resolve, reject) => {
            const query = { login: loginUsuario }
            this.dbUsuarios.findOne(query, (err, data) => {
                if(err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    
    adicionar(usuario) {
        console.log(usuario)
        return new Promise((resolve, reject) => {
            this.dbUsuarios.insert(usuario, (err, data) => {
                if(err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

module.exports = (app) => new UsuariosDAO(app)