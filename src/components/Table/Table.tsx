import MUIDataTable from  "mui-datatables";
interface props {
    tableColums: [],
    tableData :[]
}

const Table: React.FC<props> = (props) => {
    return(
        <div>
            <MUIDataTable 
                columns={props.tableColums} 
                data={props.tableData} 
                title={undefined} 
            />
        </div>
    )
}

export default Table