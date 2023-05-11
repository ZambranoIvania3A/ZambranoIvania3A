- class Supervisor {

    private nombre: string;
   
    private apellido: string;
   
    private empresa: string;
   
    private departamento: string;
   
   
   
   
    constructor({ nombre = "", apellido = "", empresa = "", departamento = "" }: {
   
    nombre: string;
   
    apellido: string;
   
    empresa: string;
   
    departamento: string;
   
    }) {
   
    this.nombre = nombre;
   
    this.apellido = apellido;
   
    this.empresa = empresa;
   
    this.departamento = departamento;
   
    }
   
   
   
   
    public getSupervisor(): string {
   
    return this.nombre;
   
    }
   
   
   
   
    public setSupervisor(nombre: string): void {
   
    this.nombre = nombre;
   
    }
   
   
   
   
    public getSupervisorA(): string {
   
    return this.apellido;
   
    }
   
   
   
   
    public setSupervisorA(apellido: string): void {
   
    this.apellido = apellido;
   
    }
   
   
   
   
    public getEmpresa(): string {
   
    return this.empresa;
   
    }
   
   
   
   
    public setEmpresa(empresa: string): void {
   
    this.empresa = empresa;
   
    }
   
   
   
   
    public getSupervisorArea(): string {
   
    return this.departamento;
   
    }
   
   
   
   
    public setSupervisorArea(departamento: string): void {
   
    this.departamento = departamento;
   
    }
   
   
   
   
    public getInformacion(): string {
   
    return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEmpresa: ${this.empresa}\nDepartamento: ${this.departamento}`;
   
    }
   
   }
   
   
   
   
   let supervisor1 = new Supervisor({
   
    nombre: "Ivania",
   
    apellido: "Zambrano",
   
    empresa: "fabril",
   
    departamento: "contabilidad"
   
   });
   
   
   
   
   let supervisor2 = new Supervisor({
   
    nombre: "Dayana",
   
    apellido: "Solorzano",
   
    empresa: "fabril",
   
    departamento: "produccion"
   
   });
   
   
   
   
   console.log("Información del supervisor 1:");
   
   console.log(supervisor1.getInformacion());
   
   
   
   
   console.log("Información del supervisor 2:");
   
   console.log(supervisor2.getInformacion());
