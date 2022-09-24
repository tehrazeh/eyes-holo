import * as axios from 'axios';


const Test = (props) => {
    let repos = ['stats-dont-lie']
    let dateCreated, timeCreated = 0;
    repos.forEach((repo) => {      
            axios.get(`https://api.github.com/repos/tehrazeh/${repo}/commits`)
            .then(response => {
                console.log(`Total commits: ${response.data.length}`)
                dateCreated = response.data[response.data.length - 1].commit.committer.date.substring(0, 10)
                timeCreated = response.data[response.data.length - 1].commit.committer.date.substring(11, 19)
                console.log(`Date Created: ${dateCreated}`)
                console.log(`Time Created: ${timeCreated}`)
                console.log(`Last Change: ${response.data[0].commit.committer.date}`)
            })
        
    })   
    return (
        <div>testo</div>
    )
}

export default Test