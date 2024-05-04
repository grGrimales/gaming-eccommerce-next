import { Confirm } from "semantic-ui-react";



export function ConfirmModal({ ...rest }) {

    return <Confirm className="confirm" size="mini" {...rest} />
    }