/*
 * <If teste={expressao}>
 *      Conteúdo... (props.children)
 * </If>
*/

export default function If(props)   {
    const filhoElse = props.children.filter(filho => {
        return filho.type && filho.type.name === "Else";
    })[0];

    const filhosIf = props.children.filter(filho => {
        return filho !== filhoElse;
    });

    if(props.teste) {
        return filhosIf;
    }
    else if(filhoElse)    {
        return filhoElse
    }
    else    {
        return false;
    }
}

export const Else = (props) => props.children;