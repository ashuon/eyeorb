// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
                        
const username = "eye"; // Put your Nekoweb username here

const getStats = async () => {
    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    document.getElementById("created").innerHTML = `<em>Created</em>: ${created}`;
    document.getElementById("updated").innerHTML = `<em>Updated</em>: ${updated}`;
    document.getElementById("visitors").innerHTML = `<em>Visits</em>: ${json.views}`;
    document.getElementById("followers").innerHTML = `<em>Followers</em>: ${json.followers}`;
};
getStats();
