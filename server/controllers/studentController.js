const Assessment = require('../models/Assessment');

exports.getPublishedSchedules = async (req, res) => {
    try {
        const { year, batch, faculty, date } = req.query;

        let query = { status: 'Published' };

        if (date) query.date = new Date(date);
        if (batch) query.batch = batch;
        if (year) query.batch = new RegExp(`^${year}-`);
        if (faculty) query['allocations.faculty'] = faculty;

        const schedules = await Assessment.find(query)
            .populate('allocations.room', 'roomNumber building capacity')
            .sort({ date: 1, startTime: 1 });

        res.status(200).json({ success: true, count: schedules.length, data: schedules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};