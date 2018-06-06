const ENDPOINT_API_SEARCH = "http://localhost:8001/api/search";
const ENDPOINT_API_TAG_QUEUE = "http://localhost:8001/api/tag_queue";
const ENDPOINT_API_IMAGE  = "http://localhost:8001/";

class TifariAPI {
    static getToBeTaggedList() {
        try {
            return fetch(ENDPOINT_API_TAG_QUEUE, { method: "GET" })
                .then(results => results.json())
        }
        catch(err) {
            console.error(err);
        }

    }
    static getImageUrl(img) {
        return ENDPOINT_API_IMAGE + img.path;
    }

    static search(tags) {
        try {
            return fetch(ENDPOINT_API_SEARCH, {
                method: "POST",

                body: JSON.stringify({
                    tags,
                    offset: 0,
                    max: 20
                })
            })
            .then(results => results.json())
        } catch(err) {
            console.error(err);
        }
    }

    static addTag(img, tagName) {
        try {
        }
        catch(err) {
            console.error(err);
        }
    }

    static removeTag(img, tag) {
        try {
        }
        catch(err) {
            console.error(err);
        }

    }
}

export default TifariAPI;