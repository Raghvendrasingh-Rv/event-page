import React,{useEffect,useState} from 'react'

function Repos() {
    const [repo , setRepo] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("https://api.github.com/users/Raghvendrasingh-Rv/repos")
            const resJ= await response.json()
            setRepo(resJ);
        }
        fetchData()
    },[])

    const listRepos = repo.length!==0?(
        repo.slice(0,5).map((item) => <li key={item.id}>{item.name}</li>)
    ):(
        <li>No repo found</li>
    )

    return (
        <>
          <ul>{listRepos} </ul> 
        </>
    )
}

export default Repos
