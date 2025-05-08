const Banner = require("../models/bannerModel");


// Create a new banner
const createBanner = async (req, res) => {
  try {
    const { imageUrl, title, description, link } = req.body;

    // Basic validation
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const banner = new Banner({
      imageUrl,
      title,
      description,
      link,
    });

    const savedBanner = await banner.save();
    res.status(201).json(savedBanner);
  } catch (error) {
    console.error("Error creating banner:", error);
    res.status(500).json({ message: "Failed to create banner" });
  }
};

// Get all banners
const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.status(200).json(banners);
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({ message: "Failed to fetch banners" });
  }
};

// Get a single banner by ID
const getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json(banner);
  } catch (error) {
    console.error("Error fetching banner:", error);
    res.status(500).json({ message: "Failed to fetch banner" });
  }
};

// Update a banner by ID
const updateBanner = async (req, res) => {
  try {
    const { imageUrl, title, description, link } = req.body;

    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      { imageUrl, title, description, link },
      { new: true, runValidators: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.status(200).json(updatedBanner);
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ message: "Failed to update banner" });
  }
};

// Delete a banner by ID
const deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Error deleting banner:", error);
    res.status(500).json({ message: "Failed to delete banner" });
  }
};

module.exports = {createBanner, getAllBanners, getBannerById, updateBanner, deleteBanner}