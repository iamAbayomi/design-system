import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@mui/system";
import MUIDataTable from  "mui-datatables";
import { muiTableOptionType } from "../../class/Utilites";
interface props {
    tableColums: any,
    tableData : any
}

const Table: React.FC<props> = (props) => {
    const getMuiTheme = () => createTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: '#FF0000'
                }
            }
        }
    })

    return(
        <div>
            <ThemeProvider theme={getMuiTheme()}    >
                <MUIDataTable 
                    columns={props.tableColums} 
                    data={props.tableData} 
                    title={""} 
                    options={options}
                />
            </ThemeProvider>
        </div>
    )
}

export default Table


// Options for MUIDataTables
const options: muiTableOptionType = {
    elevation: 0,
    rowsPerPage: 10,
    responsive: 'standard',
    pagination : true,
    textLabels: {
        body: {
          noMatch: "No Transactions currently, please purchase a card or coin to see your transactions",
          toolTip: "Sort",
          
        }
    }
}
