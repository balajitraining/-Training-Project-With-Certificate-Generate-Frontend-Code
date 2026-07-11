'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaUserTie, FaClock, FaCertificate, FaArrowRight, FaHandshake, FaBuilding, FaUniversity, FaUsers, FaBriefcase, FaAward, FaFileContract } from 'react-icons/fa'


const CoursesPage = () => {
  const courses = [

    // ========== NEW: GOVERNMENT PARTNERSHIPS & MOUs ==========
    {
      title: "MOU with RSLDC Under Project (2014-15)",
      description: "",
      icon: <FaHandshake className="text-emerald-600 text-2xl" />,
      type: "partnership",
      category: "government",
      hideTime: true  // ⬅️ This will hide time and clock icon
    },
    {
      title: "MOU with RSLDC Under Project (2015-16)",
      description: "",
      icon: <FaHandshake className="text-emerald-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with RKCL Under Project (2017-18)",
      description: "",
      icon: <FaBuilding className="text-indigo-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with State PMKVY Rajasthan (2017-18)",
      description: "",
      icon: <FaUniversity className="text-red-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with DDU-GKY Rajasthan (2018-19)",
      description: "",
      icon: <FaUsers className="text-orange-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with MMYKY in Rajasthan (2019-20)",
      description: "",
      icon: <FaBriefcase className="text-pink-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with RSLDC Under RSTP Project for Jail Inmates Training (2019-20)",
      description: "",
      icon: <FaAward className="text-purple-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "Associated with TSSC (2018-19)",
      description: "",
      icon: <FaBuilding className="text-cyan-600 text-2xl" />,
      type: "partnership",
      category: "corporate"
    },
    {
      title: "ESDM with TSSC (2018-19)",
      description: "",
      icon: <FaFileContract className="text-blue-600 text-2xl" />,
      type: "partnership",
      category: "corporate"
    },
    {
      title: "RPL with TSSC (2018-19)",
      description: "",
      icon: <FaCertificate className="text-yellow-600 text-2xl" />,
      type: "partnership",
      category: "corporate"
    },
    {
      title: "NULM with TSSC (2019-20)",
      description: "",
      icon: <FaUsers className="text-teal-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "MOU with RSLDC Under I AM SHAKTI Project Funded by MCD Govt. Of Rajasthan (2020-21)",
      description: "",
      icon: <FaHandshake className="text-rose-600 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "Sanctioned Under JJM RPL RSLDC Funded by PHED Department, Govt. Of Rajasthan (2020-21)",
      description: "",
      icon: <FaUniversity className="text-blue-700 text-2xl" />,
      type: "partnership",
      category: "government"
    },
    {
      title: "Sanctioned RPL Under CSSM-PMKVY in Rajasthan (2020-21)",
      description: "",
      icon: <FaAward className="text-green-700 text-2xl" />,
      type: "partnership",
      category: "government"
    },
     // ========== EXISTING TRAINING COURSES ==========
    {
      title: "Pre-License Training - General Insurance (25 hrs)",
      description: "25 Hrs Training Programme is a mandatory Pre-Licensing training programme for those seeking license for the first time. Covers different aspects of General Insurance & the business as a whole.",
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      type: "pre-license",
      category: "general"
    },
    {
      title: "Pre-License Training - Life Insurance (25 hrs)",
      description: "Mandatory training for first-time license seekers. Provides full exposure to Life Insurance concepts and business practices.",
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      type: "pre-license",
      category: "life"
    },
    {
      title: "License Renewal - Life Insurance (25 hrs)",
      description: "Required every 3 years to continue working as an agent. Completion makes you eligible for license renewal for another 3 years.",
      icon: <FaCertificate className="text-green-600 text-2xl" />,
      type: "renewal",
      category: "life"
    },
    {
      title: "Pre-License Training - Health Insurance (25 hrs)",
      description: "Mandatory training covering all aspects of Health Insurance for first-time license seekers.",
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      type: "pre-license",
      category: "health"
    },
    {
      title: "POSP Training (25 hrs)",
      description: "Provides basic knowledge of Life, General and Health insurance to work as an insurance sales person.",
      icon: <FaClock className="text-purple-600 text-2xl" />,
      type: "posp",
      category: "all"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Insurance Training Programs & Partnerships
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs and strategic partnerships with government & corporate organizations
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full mr-4 ${
                    course.type === 'pre-license' ? 'bg-blue-50' :
                    course.type === 'renewal' ? 'bg-green-50' :
                    course.type === 'posp' ? 'bg-purple-50' :
                    'bg-emerald-50'
                  }`}>
                    {course.icon}
                  </div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                    course.type === 'pre-license' ? 'bg-blue-100 text-blue-800' :
                    course.type === 'renewal' ? 'bg-green-100 text-green-800' :
                    course.type === 'posp' ? 'bg-purple-100 text-purple-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {course.type === 'pre-license' ? 'New License' :
                     course.type === 'renewal' ? 'Renewal' :
                     course.type === 'posp' ? 'POSP' :
                     ''}  {/* ⬅️ Empty string for partnership */}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                {course.description && (
                  <p className="text-gray-600 mb-4">{course.description}</p>
                )}
                {/* ⬅️ Hide time section if hideTime is true */}
                {!course.hideTime && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-500">
                      <FaClock className="mr-1" />
                      {course.title.includes('15') ? '15 hours' : 
                       course.type === 'partnership' ? '' : 
                       '25 hours'}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to start your insurance career?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our expert-led training programs and strong government partnerships will prepare you for success in the insurance industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href='/contact' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Contact Advisor <FaArrowRight className="ml-2" />
              </Link>
              <Link href='/verification-certificate' className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Certificate
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CoursesPage
