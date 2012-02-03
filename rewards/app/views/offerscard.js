quadio.views.OffersCard = Ext.extend(Ext.TabPanel, {
	title: 'Offers',
	iconCls:'info_plain',
	defaults: {
		styleHtmlContent: true
	},
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Offers'
	}],
	items: [{
		title: 'New',
		scroll: 'vertical',
		html: '<p>This is cool</p>',
		xtype: 'dealslist'
	},{
		title: 'Redeemed',
		scroll: 'vertical',
		html: '<p>Toolbars are cool</p>',
		xtype: 'dealslist'
	},{
		title: 'Expired',
		scroll: 'vertical',
		xtype: 'dealslist'
	}]
});

Ext.reg('offerscard',quadio.views.OffersCard);