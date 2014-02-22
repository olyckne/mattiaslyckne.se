'use strict';

angular.module('mockUser', [])
	.value('userMockJSON', {
		"id":"1",
		"username":"olyckne",
		"firstname":"Mattias","lastname":"Lyckne",
		"created_at":"2013-07-05 12:00:24",
		"updated_at":"0000-00-00 00:00:00",
		"contact_info": [
			{
				"info": "+4612345",
				"type": { "name": "Phone", "url": "tel:+4612345"}
			},
			{
				"info": "@MattiasLyckne",
				"type": { "name": "Twitter", "url": "https://twitter.com/@MattiasLyckne" }
			},
            {
                "info": "hi@mattiaslyckne.se",
                "type": { "name": "Mail", "url": "mailto:hi@mattiaslyckne.se" }
            }
		]
});
