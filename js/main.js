const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];
const accounts = [
  { clientId: 6, bankId: 2, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
];
const banks = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'BANCO DE CHILE' },
  { id: 3, name: 'BANCO ESTADO' }
];

// 0-Listar todos los clientes
var listarClientes = function(){
  console.log('--------------------RESPUESTA 0--------------------');
  clients.forEach((client) => {
    console.log(`${client.id} ${client.name} ${client.taxNumber}`);
  });
}
listarClientes();



//1-listar clientes ordenados por rut
var listarClientesOrdenados = function(){
  console.log('--------------------RESPUESTA 1--------------------');
  //obtener clientes
  let clientes = clients;
  //ordenar clientes
  clientes.sort((a, b)=>{
    //obtener numero del rut
    rutNumeroA=parseInt(a.taxNumber.substring(0,a.taxNumber.length-1));
    rutNumeroB=parseInt(b.taxNumber.substring(0,b.taxNumber.length-1));
    //evaluar para funcion sort
    return rutNumeroA-rutNumeroB;
  });
  //mostrar clientes
  clientes.forEach(client => {
    console.log(`rut: ${client.taxNumber} \t id: ${client.id} \t nombre: ${client.name}`);
  });
}
listarClientesOrdenados();

//2-Listar clientes y suma de saldos
 var listarClientesSumas = function(){
   console.log('--------------------RESPUESTA 2--------------------');
   //recorrer todos los clientes
   clients.forEach(client => {
     //filtrar cuentas del cliente
     let filtrado = accounts.filter( x => x.clientId === client.id);
     //suma total de cuentas del cliente
     let total = filtrado.reduce((a,b)=> a+b.balance, 0);
     //mostrar datos
     console.log(`Nombre: ${client.name} saldo total: ${total}`);
   });
 }
 listarClientesSumas();

 //4-Listar bancos con ruts de sus clientes
var listarRutBancos = function(){
  console.log('--------------------RESPUESTA 4--------------------');
  //filtrar clientes por banco
  let filtrado = accounts.filter(x => x.bankId === 1);
  filtrado.forEach( account => {
    let clienteOficial = clients.find((cliente)=>{
      return cliente.id===account.clientId;
    });
    console.log(account.clientId+" "+account.bankId+" "+clienteOficial.taxNumber);
  });
}
listarRutBancos();
