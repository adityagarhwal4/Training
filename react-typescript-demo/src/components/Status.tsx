type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export default function Status(props: StatusProps) {
    let message;
    if(props.status === "loading"){
        message = "Loading...";
    } else if(props.status === "success"){
        message = "Data fetched successfully";
    } else if(props.status === "error"){
        message = "Error Fething Data";
    }
    
  return (
    <div>Status - {message}</div>
  )
}
