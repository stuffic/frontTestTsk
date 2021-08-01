import axios from "axios";

const NEWS_API_BASE_URL = "http://localhost:8080/news";

const INSTRUCTOR = 'Admin'
const PASSWORD = '12345'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class NewsService {

    getNews() {
        return axios.get(NEWS_API_BASE_URL);
    }

    createNews(news) {
        return axios.post(NEWS_API_BASE_URL, news);
    }

    getNewsById(newsId) {
        return axios.get(NEWS_API_BASE_URL + '/' + newsId);
    }

    updateNews(news, newsId) {
        return axios.put(NEWS_API_BASE_URL + '/' + newsId, news);
    }

    deleteNews(newsId) {
        return axios.delete(NEWS_API_BASE_URL + '/' + newsId);
    }

    retrieveAllNews(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/news`,
        );
    }
}


export default new NewsService()