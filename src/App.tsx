import { blogPosts, categories, description, faqs, title } from './appData'
import Banner from './components/banner/SimpleBanner'
import BlogList from './components/blog/BlogList'
import CategoryList from './components/category/CategoryList'
import Faq from './components/faq/Faq'
import Footer from './components/footer/MultiColumnFooter'
import Navbar from './components/navbar/BlogNavbar'
import Newsletter from './components/newsletter/Newsletter'
import SectionHeading from './components/sectionHeading/ColoredSectionHeading'
import { getAllPosts } from './utils/loadPosts'
import { Buffer } from 'buffer'
window.Buffer = Buffer

function App() {
  const posts = getAllPosts()
  return (
    <>
      <Navbar />
      <Banner title={title} description={description} />

      <div className="mx-auto max-w-6xl px-3">
        <CategoryList categories={categories} />

        <SectionHeading
          title={['Latest', 'Articles']}
          subtitle="Diverse Range of articles related to html css and javascript"
        />
        <BlogList posts={posts} />

  

        <Faq items={faqs} />
      
      </div>

      <Footer />
    </>
  )
}

export default App
