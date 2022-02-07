import { fontWeight } from "@mui/system"

interface props{
    fontSize: any
    text: any,
    fontWeight: string,
    lineHeight: string,
    //textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana"
    // textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | 'match-parent'
}

const Typography: React.FC<props> =(props) => {
    return(
            <p 
             style={{
                    fontSize:   `${props.fontSize}`,
                    fontWeight: `${props.fontWeight}`,
                    lineHeight: `${props.lineHeight}`,
                    // textAlign:  `${props.textAlign}`
                    //textTransform: `${props.textTransform}`
                }}>
                {props.text}
            </p>
    )
}

export default Typography