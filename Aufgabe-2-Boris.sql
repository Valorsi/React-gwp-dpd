SELECT 
	h.event_id,
    e.event_datum
FROM `history` as h 
LEFT JOIN `event` as e ON h.event_id = e.event_id
WHERE CONVERT(h.history_datum, DATE) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)
