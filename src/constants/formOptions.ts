interface positionOption {
  id: string;
  name: string;
}

interface challengeOption {
  id: string;
  name: string;
}

interface CRMOption {
  id: string;
  name: string;
}

interface industryOption {
  id: string;
  name: string;
}


export const positionOptions: positionOption[] = [
  { id: "bm", name: "Board member" },
  { id: "c", name: "C-level" },
  { id: "ger", name: "Gerente" },
  { id: "subg", name: "Subgerente" },
  { id: "jefe", name: "Jefe área" },
  { id: "lider", name: "Lider de área" },
  { id: "eject", name: "Ejecutivo / Analista" },
  { id: "other", name: "Otro" },
];

export const challengeOptions: challengeOption[] = [
  { id: "A", name: "Aumentar conversión de leads a clientes" },
  { id: "B", name: "Reducir customer churn" },
  { id: "C", name: "Implementar un programa VoC" },
  { id: "D", name: "Reducir costos en gestión de reclamos" },
  { id: "E", name: "Optimizar procesos comerciales" },
  { id: "F", name: "Optimizar procesos operativos" },
  { id: "G", name: "Otro" },
];

export const CRMOptions: CRMOption[] = [
  { id: "s", name: "SAP" },
  { id: "md", name: "Microsoft Dynamics" },
  { id: "sf", name: "Salesforce" },
  { id: "hs", name: "Hubspot" },
  { id: "zh", name: "Zoho" },
  { id: "ns", name: "Netsuite (Oracle)" },
  { id: "m", name: "Monday" },
  { id: "own", name: "CRM Propio" },
  { id: "none", name: "No tengo CRM" },
];

export const industryOptions: industryOption[] = [
  { id: "i1", name: "Tecnología" },
  { id: "i2", name: "Software" },
  { id: "i3", name: "Servicios" },
  { id: "i4", name: "Financiera" },
  { id: "i5", name: "Telecomunicaciones" },
  { id: "i6", name: "Producción/ Fabricación" },
  { id: "i7", name: "Logística" },
  { id: "i8", name: "Consumo Masivo" },
  { id: "i9", name: "Mayorista" },
  { id: "i10", name: "Retail" },
  { id: "i11", name: "Otra" },
];
