
// Respsonsive type for 
export type Responsive = 'vertical' | 'standard' | 'simple';


//export Data Type for Material Table 
export type muiTableOptionType = {
    elevation: number,
    rowsPerPage?: number,
    onRowClick? : (rowData : any) => void
    responsive: Responsive,
    pagination? : boolean,
    textLabels?: {
        body: {
          noMatch: string,
          toolTip: "Sort",
          
        }
    }
}

