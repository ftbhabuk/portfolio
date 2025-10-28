export default function SocialPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-800 text-white">
            <h1 className="text-xl font-semibold">Social Media Preview Tester</h1>
            <p className="mt-1 text-sm">Test how your site appears when shared on social media</p>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current OG Image</h2>

            <div className="border border-gray-200 rounded-lg p-4 mb-8">
              <img src="/images/og-image.png" alt="OG Image" className="w-full h-auto rounded-md shadow-sm" />
              <p className="mt-2 text-sm text-gray-500">Static image for social media sharing</p>
            </div>

            <h2 className="text-lg font-medium text-gray-900 mb-4">Platform Previews</h2>

            <div className="space-y-8">
              {/* Facebook Preview */}
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Facebook</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="max-w-md mx-auto bg-white rounded-md shadow-sm overflow-hidden">
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-900">bhabukb.com.np</p>
                      <h4 className="text-base font-semibold mt-1">Bhabuk Bhattarai | CS Student & Writer</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding
                        projects.
                      </p>
                    </div>
                    <img src="/images/og-image.png" alt="Facebook Preview" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              {/* Twitter Preview */}
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Twitter</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="max-w-md mx-auto bg-white rounded-md shadow-sm overflow-hidden">
                    <img src="/images/og-image.png" alt="Twitter Preview" className="w-full h-auto" />
                    <div className="p-4">
                      <h4 className="text-base font-semibold">Bhabuk Bhattarai | CS Student & Writer</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding
                        projects.
                      </p>
                      <p className="text-xs text-gray-400 mt-2">bhabukb.com.np</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Preview */}
              <div>
                <h3 className="font-medium text-gray-900 mb-2">LinkedIn</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="max-w-md mx-auto bg-white rounded-md shadow-sm overflow-hidden">
                    <img src="/images/og-image.png" alt="LinkedIn Preview" className="w-full h-auto" />
                    <div className="p-4">
                      <p className="text-xs text-gray-500">bhabukb.com.np</p>
                      <h4 className="text-base font-semibold mt-1">Bhabuk Bhattarai | CS Student & Writer</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding
                        projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Debugging Tools</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://developers.facebook.com/tools/debug/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook Sharing Debugger
                  </a>
                  <span className="block text-xs text-gray-500 mt-1">
                    Scrape and debug how your site appears when shared on Facebook
                  </span>
                </li>
                <li>
                  <a
                    href="https://cards-dev.twitter.com/validator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Twitter Card Validator
                  </a>
                  <span className="block text-xs text-gray-500 mt-1">
                    Test how your site appears when shared on Twitter
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/post-inspector/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Post Inspector
                  </a>
                  <span className="block text-xs text-gray-500 mt-1">
                    Check how your site appears when shared on LinkedIn
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
