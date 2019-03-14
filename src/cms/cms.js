import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('contact-us', AboutPagePreview)
CMS.registerPreviewTemplate('resources', ProductPagePreview)
CMS.registerPreviewTemplate('location', BlogPostPreview)
CMS.registerPreviewTemplate('services', AboutPostPreview)
