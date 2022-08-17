import { useRouter } from "next/router";

const abc = () =>{
    const router = useRouter();
    const { dynamicRouting } = router.query;


    return (
        <div>
            abc입니다.{dynamicRouting}
        </div>
    )
}

export default abc;