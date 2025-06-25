const Resource = require('../models/Resource');
const Specialization = require('../models/Specialization');

const addResouce = async(req,res)=>{

    try {
        const user = req.user;

        if(user.user_type !== 'mentor'){
            return res.status(403).json({ message: 'Only mentors can add resources' });
        }

      const {
      heading,
      subHeading,
      categoryId,
      coursePricing,
      specialDiscount,
      description,
      resourceType
    } = req.body;

    let thumbnailUrl = req.files?.thumbnailUrl?.[0]?.filename;
    let fileUrl = req.files?.fileUrl?.[0]?.filename;

    if (!thumbnailUrl || !fileUrl) {
      return res.status(400).json({ message: 'Thumbnail and File are required' });
    }

    const allowedTypes = ['pdf', 'video'];
    if (!allowedTypes.includes(resourceType)) {
      return res.status(400).json({ message: 'Invalid resource type' });
    }

       const newResource = await Resource.create({
      mentorId: user.id,
      heading,
      subHeading,
      categoryId,
      coursePricing,
      specialDiscount,
      description,
      resourceType,
      thumbnailUrl: `http://localhost:5000/uploads/resources/${thumbnailUrl}`,
      fileUrl: `http://localhost:5000/uploads/resources/${fileUrl}`
    });

    res.status(201).json({
      message: 'Resource added successfully',
      data: newResource,
    });
    } catch (error) {
        console.error('Error adding resource:', error);
        res.status(500).json({ message: 'Server error' });
    }

}

const getMentorResources = async (req, res) => {
  try {
    const mentorId = req.user.id; 

    const { resourceType } = req.query;

    const whereClause = { mentorId };
    if (resourceType) {
      whereClause.resourceType = resourceType;
    }

    const resources = await Resource.findAll({
      where:  whereClause,
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      message: 'Resources fetched successfully',
      data: resources
    });
  } catch (error) {
    console.error('Error fetching mentor resources:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getResourcesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { resourceType } = req.query;

     if (!categoryId) {
      return res.status(400).json({ message: 'categoryId is required' });
    }

    const mentorId = req.user?.id; 

    const whereClause = { categoryId };

    // If the request is from a logged-in mentor, filter by mentorId too
    if (req.user && req.user.user_type === 'mentor') {
      whereClause.mentorId = mentorId;
    }

     if (resourceType) {
      whereClause.resourceType = resourceType;
    }

    const resources = await Resource.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      message: 'Resources fetched successfully',
      data: resources
    });
  } catch (error) {
    console.error('Error fetching resources by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addResouce,getMentorResources,getResourcesByCategory }