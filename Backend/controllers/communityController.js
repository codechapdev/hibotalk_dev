// controllers/communityController.js
const Community = require('../models/Community');

const addCommunity = async (req, res) => {
  try {
    const mentorId = req.user.id;
    const { title, description } = req.body;
    let thumbnailUrl = req.file ? `http://13.250.76.124:5000/uploads/community/${req.file.filename}` : null;

    const community = await Community.create({ mentorId, title, description, thumbnailUrl });

    res.status(201).json({ message: 'Community added successfully', data: community });
  } catch (error) {
    console.error('Add community error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMentorCommunities = async (req, res) => {
  try {
    const mentorId = req.user.id;

    const communities = await Community.findAll({
      where: { mentorId },
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      message: 'Communities fetched successfully',
      data: communities
    });
  } catch (error) {
    console.error('Error fetching mentor communities:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports = { addCommunity,getMentorCommunities };
